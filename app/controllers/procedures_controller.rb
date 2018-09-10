class ProceduresController < ApplicationController


  def index
    @procedures = Procedure.all_by_name

    respond_to do |format|
      format.json { render json: @procedures }

      format.html {}
    end
  end

  def show
    @procedure = Procedure.find(params[:id])
   
    respond_to do |format|
      format.json do 
        render json: @procedure.to_json(include: {provider_procedures: {include: :provider} })
        
      end
    end
  end

end
