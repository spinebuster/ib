# frozen_string_literal: true

Rails.application.routes.draw do
  resources :facts, only: %i[index], controller: 'facts'

  namespace :frontend do
    resources :ib, only: [:index], defaults: { format: 'html' }
  end

  root to: 'frontend/ib#index', defaults: { format: 'html' }
end
