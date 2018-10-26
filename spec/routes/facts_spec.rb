# frozen_string_literal: true

require 'rails_helper'

RSpec.describe FactsController, type: :routing do
  it 'recognizes and generates a route for index' do
    expect(
      get: '/facts.json'
    ).to route_to(
      controller: 'facts',
      action: 'index',
      format: 'json'
    )
  end
end
