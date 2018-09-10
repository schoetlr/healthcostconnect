class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def configure_permitted_parameters
    [:sign_up, :account_update].each do |action|
        devise_parameter_sanitizer.for(action).push(:name, 
                                                    :street_address, 
                                                    :city, 
                                                    :state, 
                                                    :zip_code,
                                                    :country)
    end
  end

end

