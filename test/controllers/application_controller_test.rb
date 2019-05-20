require 'test_helper'

class ApplicationControllerTest < ActionDispatch::IntegrationTest
  def test__home_page
    get root_url
    assert_response :success
  end
end
