class AddTitleAndAuthorToPosts < ActiveRecord::Migration
  def change
    add_column :posts, :title, :string
    add_column :posts, :author, :string
  end
end
