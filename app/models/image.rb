class Image < ApplicationRecord
  validates :image_url, format: { with: URI.regexp(%w[http https]) }
  validates :image_url, presence: true
end
