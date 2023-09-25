/**
 * Heading with Icon block.
 *
 * @package
 */


/**
 * WordPress Dependencies.
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

/**
 * Register block type.
 */
registerBlockType( 'aquila-blocks/heading', {
    /**
     * Block title.
     *
     * @type {string}
     */
    title: __( 'Heading with Icon', 'aquila' ),

    /**
     * Block icon.
     *
     * @type {string}
     */
    icon: 'admin-customizer',

    /**
     * Block description.
     *
     * @type {string}
     */
    description: __( 'Add Heading and select Icons', 'aquila' ),

    /**
     * Block category.
     *
     * @type {string}
     */
    category: 'aquila',

    exit() {
        return <div>Hello world, step 1 (from the editor)</div>
    },
    save(){
        return <div>Hello world, step 1 (from the frontend)</div>

    }

} );