class CreateQuakes < ActiveRecord::Migration[6.0]
  def change
    create_table :quakes do |t|
      t.integer :intensity
      t.string :location

      t.timestamps
    end
  end
end
