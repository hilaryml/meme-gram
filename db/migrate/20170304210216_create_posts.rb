class CreatePosts < ActiveRecord::Migration[5.0]
  def change
    create_table :posts do |t|
      t.text :content
      t.integer :likes, default: 0

      t.timestamps
    end
  end
end
