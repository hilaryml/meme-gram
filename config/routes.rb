Rails.application.routes.draw do
  namespace :api do
    resources :users
    resources :posts
    resources :sessions
  end

  root 'application#index'
  get '*path' => 'application#index'
end
