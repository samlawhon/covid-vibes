require 'overpass_api_ruby'
require "pry"
require 'json'


options={:bbox => {:s => 42.37125914065489, :n => 42.391642518123284,
                   :w => -71.10767841339111, :e => -71.0888385772705},
         :timeout => 900,
         :maxsize => 1073741824}

overpass = OverpassAPI::QL.new(options)

query = "node['amenity'='restaurant'];(._;>;);out geom;"

response = overpass.query(query)

restaurants = []
response[:elements].each do |restaurant|
  restaurant_hash = {
    id: restaurant[:id],
    latitude: restaurant[:lat],
    longitude: restaurant[:lat],
    name: restaurant[:tags][:name]
  }
  restaurants.push(restaurant_hash)
end

File.write('./sample-restaurants-data.json', JSON.dump(restaurants))