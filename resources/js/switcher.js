const sectionsTemp= document.getElementsByTagName('section');
const sections = [...sectionsTemp];

sections.map(sect => {
    console.log(sect.id)
});