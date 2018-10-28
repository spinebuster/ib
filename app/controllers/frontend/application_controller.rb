# frozen_string_literal: true

module Frontend
  # This is the main ApplicationController class
  class ApplicationController < ActionController::Base
    include Concerns::ActsAsExceptionable

    layout 'frontend'
  end
end
