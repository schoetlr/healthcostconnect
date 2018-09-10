class ProvidersController < ApplicationController

  def index
    @providers = Provider.all_by_name

    respond_to do |format|
      format.json { render json: @providers }

      format.html {}
    end

  end

  def show
    @provider = Provider.find(params[:id])
    respond_to do |format|
      format.json do 
        render json: @provider.to_json(include: {provider_procedures: {include: :procedure} })
        #render json: @provider
      end

      format.html {}
    end
  end

end