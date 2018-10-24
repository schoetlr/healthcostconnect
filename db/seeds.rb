# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


groups = Procedure.all.chunk { |procedure| procedure.cpt_code }.to_a

#groups of procedures with the same cpt code
groups.each do |group|
  #make the provider_procedures all point to one procedure
  (1...group.length).each do |i|
    group[i].provider_procedures.each do |pp|
      pp.procedure_id = group[0].id
    end
  end

  #destroy all but the first in a group
  group.each_with_index do |p, i|
    next if i == 0

    p.destroy
  end


end