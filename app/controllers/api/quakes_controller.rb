class Api::QuakesController < ApplicationController

  def index
    render json: Quake.all
  end

  def show
    render json: Quake.find(params[:id])
  end

  def create
    quake = Quake.new(quake_params)
    if quake.save
      render json: quake
    else 
      render json: {message: 'No yous suck'}
    end
  end

    private
    
    def quake_params
      params.require(:quake).permit(:intensity, :location)
    end

end
