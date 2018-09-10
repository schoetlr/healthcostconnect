class Provider < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :provider_procedures
  has_many :procedures, through: :provider_procedures


  def self.all_by_name
    order(:name).where(admin: false)
  end

  def address 
    "#{self.street_address}, #{self.city} #{self.state}, #{self.zip_code}"
  end

  

end

