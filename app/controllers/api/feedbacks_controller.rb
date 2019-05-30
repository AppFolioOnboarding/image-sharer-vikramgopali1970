module Api
  class FeedbacksController < ApplicationController
    def create
      name = feedback_params[:name]
      comment = feedback_params[:comments]
      if name.empty? || comment.empty?
        render json: { data: 'Both fields required', type: 'danger' }, status: :ok
      else
        render json: { data: 'Feedback received. Thank you..!!', type: 'success' }, status: :ok
      end
    end

    private

    def feedback_params
      params.require(:feedback).permit(:name, :comments)
    end
  end
end
