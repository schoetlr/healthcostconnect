class CreateProviderProcedures < ActiveRecord::Migration
  def change
    create_table :provider_procedures do |t|
      t.integer :provider_id
      t.integer :procedure_id
      t.decimal :cash_price
      t.decimal :insurance_price
      t.string :price_description

      t.timestamps null: false
    end
  end
end
