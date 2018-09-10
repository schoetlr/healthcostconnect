class Procedure < ActiveRecord::Base
  has_many :provider_procedures
  has_many :providers, through: :provider_procedures


  def self.all_by_name
    order(:name)
  end

  


end
