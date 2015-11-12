class SpotController < ApplicationController
    def create
        Spot.create(user_id: current_user.id, title: params[:tit], content: params[:con], shigan: Time.now)
        redirect_to :root
    end
end
