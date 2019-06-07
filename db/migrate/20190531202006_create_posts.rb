class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.column :filename, :string
      t.column :content_type, :string
      t.column :data, :binary
      t.timestamps
    end

    def self.down
      drop_table :posts
    end
  end
end
