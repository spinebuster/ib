# frozen_string_literal: true

require 'open-uri'

module Services
  module Facts
    # This is the Roles index service
    class Index < Services::ApplicationService
      def execute!
        url = +'https://api.chucknorris.io/jokes/'

        url +=
          if @params.key?('query')
            "search?query=#{@params[:query]}"
          elsif @params.key?('category')
            "random?category=#{@params[:category]}"
          else
            'random'
          end

        URI.parse(url).read
      end
    end
  end
end
