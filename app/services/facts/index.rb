# frozen_string_literal: true

require 'open-uri'

module Services
  module Facts
    # This is the Roles index service
    class Index < Services::ApplicationService
      def execute!
        url =
          if @params.key?('query')
            "https://api.chucknorris.io/jokes/search?query=#{@params[:query]}"
          elsif @params.key?('category')
            "https://api.chucknorris.io/jokes/random?category=#{@params[:category]}"
          else
            'https://api.chucknorris.io/jokes/random'
          end

        URI.parse(url).read
      end
    end
  end
end
