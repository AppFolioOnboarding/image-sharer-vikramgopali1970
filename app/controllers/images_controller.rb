require 'uri'

class ImagesController < ApplicationController
  def new
    @image = Image.new
  end

  def create
    @image = Image.new(image_params)
    @image.tag_list = params[:image][:tag_list]
    if !@image.valid?
      render 'new'
    else
      @image.save
      redirect_to @image
    end
  end

  def show
    @image = Image.find(params[:id])
  end

  def index
    @images = Image.order(created_at: :desc)
    if params[:tag].present? && Image.tagged_with(params[:tag]).count.zero?
      flash.now[:error] = params[:tag] + ' tag is not available.'
    elsif params[:tag].present?
      @images = Image.tagged_with(params[:tag])
      @filter_tag = params[:tag]
    end
  end

  private

  def image_params
    params.require(:image).permit(:image_url, :tag_list)
  end
end
