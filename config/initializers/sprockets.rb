# frozen_string_literal: true

Dir[File.join(Rails.root, 'lib', 'sprockets', '*.rb')].each { |l| require l }

Rails.application.assets.register_engine 'hjs', HandlebarsTemplate
