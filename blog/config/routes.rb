Rails.application.routes.draw do
  resources :articles do
    resources :comments
  end 
  root 'welcome#index'
  get 'articles/new'
end