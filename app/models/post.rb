class Post < ActiveRecord::Base
  belongs_to :admin
  has_many :comments

  validates :author, presence: true
  validates :content, presence: true
  validates :title, presence: true
end
