class CreateShocks < ActiveRecord::Migration[6.0]
  def change
    create_table :shocks do |t|
      t.string :duration
      t.string :location
      t.belongs_to :quake, null: false, foreign_key: true

      t.timestamps
    end
  end
end
