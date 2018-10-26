# frozen_string_literal: true

# This is the main ApplicationController class
class ApplicationController < ActionController::Base
  include Concerns::ActsAsExceptionable
  include Concerns::ActsAsEmitter
end
