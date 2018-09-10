class ProviderProcedure < ActiveRecord::Base
  belongs_to :provider
  belongs_to :procedure
  

  def to_builder
    Jbuilder.new do |pp|
      pp.cash_price cash_price
      pp.insurance_price insurance_price
      pp.price_description price_description
      pp.provider_name provider.name
      pp.procedure_name procedure.name
      
    end
  end
end
