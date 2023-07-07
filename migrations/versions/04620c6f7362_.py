"""empty message

Revision ID: 04620c6f7362
Revises: 11ab7b7ff8a0
Create Date: 2023-07-06 20:32:22.379295

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '04620c6f7362'
down_revision = '11ab7b7ff8a0'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('muestra', schema=None) as batch_op:
        batch_op.add_column(sa.Column('fecha', sa.DateTime(), nullable=False))
        batch_op.alter_column('lng',
               existing_type=sa.VARCHAR(length=80),
               type_=sa.Float(precision=80),
               existing_nullable=False)
        batch_op.alter_column('lat',
               existing_type=sa.VARCHAR(length=80),
               type_=sa.Float(precision=80),
               existing_nullable=False)
        batch_op.alter_column('image_specimen',
               existing_type=sa.VARCHAR(length=80),
               type_=sa.String(length=250),
               existing_nullable=False)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('muestra', schema=None) as batch_op:
        batch_op.alter_column('image_specimen',
               existing_type=sa.String(length=250),
               type_=sa.VARCHAR(length=80),
               existing_nullable=False)
        batch_op.alter_column('lat',
               existing_type=sa.Float(precision=80),
               type_=sa.VARCHAR(length=80),
               existing_nullable=False)
        batch_op.alter_column('lng',
               existing_type=sa.Float(precision=80),
               type_=sa.VARCHAR(length=80),
               existing_nullable=False)
        batch_op.drop_column('fecha')

    # ### end Alembic commands ###