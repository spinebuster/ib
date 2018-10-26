# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Frontend::IbController, type: :routing do
  it 'recognizes and generates a route for index' do
    expect(
      get: '/frontend/ib'
    ).to route_to(
      controller: 'frontend/ib',
      action: 'index',
      format: 'html'
    )
  end
end
