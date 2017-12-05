activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

activate :sprockets
set :fonts_dir, "../fonts";

page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

configure :build do
  activate :minify_css
  activate :asset_hash
  activate :relative_assets
  set :relative_links, true
end

activate :deploy do |deploy|
  deploy.build_before = true
  deploy.deploy_method = :git
  deploy.branch = 'master'
end
