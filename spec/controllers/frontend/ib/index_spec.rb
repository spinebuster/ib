# frozen_string_literal: true

require 'rails_helper'

RSpec.describe(
  Frontend::IbController, 'GET #index', type: :controller
) do
  describe 'render index' do
    it 'should response template' do
      get :index
      expect(response).to render_template(:index)
    end
  end
end
