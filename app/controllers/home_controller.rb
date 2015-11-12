class HomeController < ApplicationController
  before_action :authenticate_user!
  def index
  end
  def create
    Spot.create(user_id: current_user.id, title: params[:tit], content: params[:con], shigan: Time.now)
    redirect_to :root
  end
end
