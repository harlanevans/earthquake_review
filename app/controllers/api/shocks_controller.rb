class Api::ShocksController < ApplicationController
  before_action :set_quake
  before_action :set_shock, only: [:update, :destroy]

  def index
    # before action
    render json: @quake.shocks
  end

   def create
    binding.pry
    shock = @quake.shocks.new(shock_params)
    if shock.save
      render json: shock
    else 
      render json: {message: 'No you suck'}
    end
  end

  def update
    if @shock.update(shock_params)
      render json: @shock
    else
      render json: {message: 'No you suck'}
    end
  end

  def destroy
    @shock.destroy
  end

  private

  def set_quake
    @quake = Quake.find(params[:quake_id])
  end

  def set_shock
    @shock = Shock.find(params[:id])
  end

  def shock_params
    params.require(:shock).permit(:location, :duration, :quake_id)
  end
end
