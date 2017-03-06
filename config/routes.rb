Rails.application.routes.draw do
  resources :users
  resources :posts
  root 'posts#index'
  get '*path' => 'posts#index'
end
