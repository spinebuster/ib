# frozen_string_literal: true

# This is the main ApplicationHelper module
module ApplicationHelper
  def application_title
    I18n.t('title')
  end
end
