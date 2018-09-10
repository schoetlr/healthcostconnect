class CreateProcedures < ActiveRecord::Migration
  def change
    create_table :procedures do |t|
      t.string :name
      t.string :cpt_code
      t.integer :category_id
      
      t.timestamps null: false
    end
  end
end
