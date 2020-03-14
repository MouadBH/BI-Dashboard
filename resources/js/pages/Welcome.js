import React from 'react';
import DocumentTitle from 'react-document-title';
import GuestNav from '../components/GuestNav';
import Article from '../components/Article';
 
const Welcome = () => {
  return (
    <DocumentTitle title={`Welcome - ${window.App.name}`}>
      <div className="flex flex-col ">
        <div className="container flex flex-1 flex-col items-center justify-center">
          <h1 className="text-indigo text-2xl p-2 font-thin uppercase"> Explore Our Project</h1>
          <div className="container mx-auto px-4 md:px-12">
            <div className="flex flex-wrap -mx-1 lg:-mx-4">
                <Article 
                  title="Youth Situation in Morocco" 
                  author={[{name: 'Moad Boulahoud'}, {name: "Hassan Ait Baha"}]} 
                  image="/images/youth.jpg"
                  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque."
                />
                <Article 
                  title="Children Situation in Morocco" 
                  author={[{name: 'Abdelati Elasri'}, {name: "Elhoucien Essanhaji"}]} 
                  image="/images/children.jpg"
                  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque."
                />
                <Article 
                  title="Children Situation in Morocco" 
                  author={[{name: 'Abdelati Elasri'}, {name: "Elhoucien Essanhaji"}]} 
                  image="/images/children.jpg"
                  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque."
                />
            </div>
          </div>

        </div>

      </div>
    </DocumentTitle>
  );
};

export default Welcome;
