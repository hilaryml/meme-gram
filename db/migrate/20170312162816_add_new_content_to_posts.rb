class AddNewContentToPosts < ActiveRecord::Migration[5.0]
  def change
    add_column :posts, :new_content, :string
  end
end
