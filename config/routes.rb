Rails.application.routes.draw do
  resources :users
  resources :posts
  resources :sessions
  
  root 'posts#index'
  get '*path' => 'posts#index'
end
