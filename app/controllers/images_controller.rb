require 'uri'

class ImagesController < ApplicationController
  def new
    @image = Image.new
  end

  def create
    @image = Image.new(image_params)

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

  private

  def image_params
    params.require(:image).permit(:image_url)
  end
end
