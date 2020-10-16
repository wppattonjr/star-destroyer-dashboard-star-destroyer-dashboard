import weaponsData from '../../helpers/data/weaponsData';
import card from '../cards/weaponsCards';
import weaponsForm from '../forms/weaponsForm';

const weaponsView = () => {
  $('#add-button').html(
    '<button id="add-weapon" type="button" class="btn btn-dark">Add Weapons +</button>'
  );
  $('#add-weapon').on('click', weaponsForm.weaponForm);

  $('#app').html('');
  weaponsData.getAllWeapons().then((response) => {
    if (response.length) {
      response.forEach((item) => {
        $('#app').append(card.weaponsCard(item));
      });
    } else {
      $('#app').append('<h2> NO CARDS!</h2>');
    }
    $('.delete').on('click', (e) => {
      e.stopImmediatePropagation();
      /* eslint-disable */
      const [type, id] = e.currentTarget.id.split('__');
      /* eslint-enable */
      $(`#weapons-${id}`).remove();
      weaponsData.deleteWeapons(id);
    });
  });
};

export default { weaponsView };
