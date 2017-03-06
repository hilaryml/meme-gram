Rails.application.routes.draw do
  resources :users
  resources :posts
  resources :sessions

  root 'application#index'
  get '*path' => 'application#index'
end
