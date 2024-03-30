const memberProfiles = [{
  name: 'Name 1',
  description: 'Currently working as a Marketing Manager for a leading tech startup in New York City, she specializes in digital marketing strategies, content creation, and social media management. Outside of work, Sarah enjoys exploring new destinations with her camera in hand, practicing yoga for relaxation, experimenting with new recipes in the kitchen, and spending quality time with family and friends.'
}, {
  name: 'Name 2',
  description: 'Currently working as a Marketing Manager for a leading tech startup in New York City, she specializes in digital marketing strategies, content creation, and social media management. Outside of work, Sarah enjoys exploring new destinations with her camera in hand, practicing yoga for relaxation, experimenting with new recipes in the kitchen, and spending quality time with family and friends.'
}, {
  name: 'Name 3',
  description: 'Currently working as a Marketing Manager for a leading tech startup in New York City, she specializes in digital marketing strategies, content creation, and social media management. Outside of work, Sarah enjoys exploring new destinations with her camera in hand, practicing yoga for relaxation, experimenting with new recipes in the kitchen, and spending quality time with family and friends.'
}, {
  name: 'Name 4',
  description: 'Currently working as a Marketing Manager for a leading tech startup in New York City, she specializes in digital marketing strategies, content creation, and social media management. Outside of work, Sarah enjoys exploring new destinations with her camera in hand, practicing yoga for relaxation, experimenting with new recipes in the kitchen, and spending quality time with family and friends.'
}]

const TeamProfiles = () => {
  const MemberCard = ({ memberName, description }: { memberName: string; description: string }) => {
    return (
      <div className="bg-white rounded-lg border border-slate-200 p-6 shadow-md">
        <h2 className="font-semibold text-slate-700">{memberName}</h2>
        <p className="font-light text-slate-400">{description}</p>
      </div>
    )
  }

  return (
    <div className="container">
      <div className="grid grid-cols-12 gap-4">
        {memberProfiles?.map((profile) => (
          <div className="col-span-12 sm:col-span-6" key={profile.name}>
            <MemberCard
              memberName={profile.name}
              description={profile.description}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default TeamProfiles