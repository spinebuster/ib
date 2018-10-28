# frozen_string_literal: true

require 'rails_helper'

RSpec.describe FactsController, 'GET #index', type: :controller do
  context 'get index json' do
    before(:each) do
      get(
        :index,
        format: 'json'
      )
    end

    it 'returns 200 status' do
      expect(response.status).to eql(200)
    end

    it 'returns a false JSON' do
      expect(response.body).to be_json_success(true)
    end
  end
end
