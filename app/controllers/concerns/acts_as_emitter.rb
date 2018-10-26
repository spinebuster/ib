# frozen_string_literal: true

module Concerns
  # This module includes all the methods that a controller needs to
  # control the render of diferente formats
  module ActsAsEmitter
    extend ::ActiveSupport::Concern

    included do
    end

    # This are the Class Methods that this concern extends
    module ClassMethods
    end

    def emitter_format(service)
      @data = service.new(params).execute!
      respond_to do |format|
        format.json do
          render_json(@data)
          return
        end
      end
    end

    protected

    def render_json(data)
      render json: {
        success: true,
        data: data
      }
    end
  end
end
