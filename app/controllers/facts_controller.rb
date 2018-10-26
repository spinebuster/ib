# frozen_string_literal: true

# This is the FactsController class
class FactsController < ApplicationController
  def index
    emitter_format ::Services::Facts::Index
  end
end
