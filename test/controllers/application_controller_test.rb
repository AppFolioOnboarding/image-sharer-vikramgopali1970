require 'test_helper'

class ApplicationControllerTest < ActionDispatch::IntegrationTest
  test 'can see home page' do
    get root_url
    assert_response :success
    assert_select 'h1', 'Hi..!!'
  end
end
