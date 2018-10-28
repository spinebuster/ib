# frozen_string_literal: true

module Services
  # The main ApplicationService Class
  # every service should inherit this class
  class ApplicationService
    def initialize(params)
      @params = params
    end
  end
end
