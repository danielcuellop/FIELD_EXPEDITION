"""empty message

Revision ID: 11ab7b7ff8a0
Revises: 749e90aabe96
Create Date: 2023-07-06 20:30:18.696560

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '11ab7b7ff8a0'
down_revision = '749e90aabe96'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('muestra', schema=None) as batch_op:
        batch_op.add_column(sa.Column('fecha', sa.DateTime(), nullable=False))
        batch_op.alter_column('lng',
               existing_type=sa.VARCHAR(length=80),
               type_=sa.Float(),
               existing_nullable=False)
        batch_op.alter_column('lat',
               existing_type=sa.VARCHAR(length=80),
               type_=sa.Float(),
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
               existing_type=sa.Float(),
               type_=sa.VARCHAR(length=80),
               existing_nullable=False)
        batch_op.alter_column('lng',
               existing_type=sa.Float(),
               type_=sa.VARCHAR(length=80),
               existing_nullable=False)
        batch_op.drop_column('fecha')

    # ### end Alembic commands ###