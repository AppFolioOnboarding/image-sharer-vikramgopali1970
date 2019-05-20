Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :images, only: %i[create show new]
  root 'images#index'
end
